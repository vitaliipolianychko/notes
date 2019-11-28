import React, { useState } from "react";
import { useStyles } from "../styles";
import { customUseStyle } from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SimpleMenu from "../Menu";
import addPicture from "../../assets/add_folder.svg";
import { connect } from "react-redux";
import {
  addFolderAction,
  updateFolderNameAction,
  currentFolderIdAction
} from "../../redux/folders/actions";

const generateUniqueId = require("uuid/v1");
const mapStateToProps = state => {
  return {
    dataFolder: state.folders.data,
    activeFolder: state.folders.currentFolder
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addFolder: (values, folderId) => {
      dispatch(addFolderAction(values, folderId));
    },
    updateFolderName: (folderId, folderName) => {
      dispatch(updateFolderNameAction(folderId, folderName));
    },
    currentFolder: folderId => {
      dispatch(currentFolderIdAction(folderId));
    }
  };
};

function CustomizedTables({
  addFolder,
  updateFolderName,
  dataFolder,
  activeFolder,
  currentFolder
}) {
  const classes = useStyles();
  const classesOne = customUseStyle();
  const [currentNameFolder, setCurrentNameFolder] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [editFolderName, setEditFolderName] = useState(false);
  const submitData = () => {
    const folderId = generateUniqueId();
    let values = "New Folder";
    addFolder(values, folderId);
  };
  return (
    <Paper className={classesOne.root} style={{ background: "#d3d3d3" }}>
      <Table>
        <div className={classesOne.backTableRoot}>Folders</div>
        <TableBody>
          {dataFolder.map(folder => (
            <>
              <TableRow
                className={
                  activeFolder !== folder.id
                    ? classes.row
                    : classesOne.rowActive
                }
              >
                {editFolderName && activeFolder === folder.id ? (
                  <input
                    style={{ width: "145px", height: "15px" }}
                    name="changeName"
                    autoFocus
                    onChange={event => {
                      setCurrentNameFolder(event.target.value);
                      event.target.value !== ""
                        ? updateFolderName(activeFolder, event.target.value)
                        : updateFolderName(activeFolder, "New Folder");
                    }}
                    value={currentNameFolder}
                    onBlur={() => {
                      setEditFolderName(false);
                      setShowMenu(false);
                    }}
                  />
                ) : (
                  <TableCell
                    style={{
                      padding: "0px",
                      height: "25px",
                      paddingLeft: "5px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                    onClick={() => {
                      currentFolder(folder.id);
                      setCurrentNameFolder(folder.folders);
                      setShowMenu(true);
                    }}
                  >
                    {folder.folders}
                    {showMenu && activeFolder === folder.id ? (
                      <div>
                        <SimpleMenu
                          setEditFolderName={setEditFolderName}
                          submitData={submitData}
                        />
                      </div>
                    ) : null}
                  </TableCell>
                )}
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
      <button type="button" onClick={submitData} className={classes.button}>
        <img
          src={addPicture}
          style={{
            width: "15px",
            height: "15px",
            marginRight: "5px"
          }}
          alt="add folder"
        />
        Add Folder
      </button>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedTables);
