import React, { useState } from "react";
import { customUseStyle, StyledTableCell, CustomTableCell } from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import uuid from "uuid";
import SimpleMenu from "../Menu";
import addPicture from "../../assets/add_folder.svg";
import addFolder from "../../assets/create_folder.svg";
import editPicture from "../../assets/edit.svg";
import delPicture from "../../assets/delete_note.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addFolderAction,
  updateFolderNameAction,
  currentFolderIdAction,
  deleteFolderAction
} from "../../redux/folders/actions";
import { deleteNoteAction } from "../../redux/notes/actions";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    dataNotes: state.notes.data,
    dataFolder: state.folders.data,
    activeFolder: state.folders.currentFolder
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addFolderAction,
      updateFolderNameAction,
      deleteFolderAction,
      currentFolderIdAction,
      deleteNoteAction
    },
    dispatch
  );
};

function Folder({
  addFolderAction,
  updateFolderNameAction,
  dataFolder,
  activeFolder,
  dataNotes,
  deleteNoteAction,
  deleteFolderAction,
  currentFolderIdAction
}) {
  const classesOne = customUseStyle();
  const [currentNameFolder, setCurrentNameFolder] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [editFolderName, setEditFolderName] = useState(false);

  const submitData = () => {
    const folderId = uuid.v1();
    let values = "New Folder";
    addFolderAction(values, folderId);
    currentFolderIdAction(folderId);
    setShowMenu(true);
  };
  const delFolder = () => {
    deleteFolderAction(activeFolder);
    dataNotes.map(i => {
      return i.folderId === activeFolder && deleteNoteAction(i.id);
    });
  };
  const editFolder = () => {
    setEditFolderName(true);
  };
  const saveEditFolder = event => {
    setCurrentNameFolder(event.target.value);
    event.target.value !== ""
      ? updateFolderNameAction(activeFolder, event.target.value)
      : updateFolderNameAction(activeFolder, "New Folder");
  };
  const loseFocus = () => {
    setEditFolderName(false);
    setShowMenu(false);
  };
  const getinfoFolder = (param1, param2) => () => {
    currentFolderIdAction(param1);
    setCurrentNameFolder(param2);
    setShowMenu(true);
  };

  return (
    <div className={classesOne.root}>
      <div>
        <div className={classesOne.backTableRoot}>
          Folders
          <div className={classesOne.responsive}>
            <button
              type="button"
              className={classesOne.buttonResponsive}
              onClick={submitData}
            >
              <img
                src={addFolder}
                className={classesOne.picture}
                alt="add folder"
              />
            </button>
          </div>
        </div>

        {dataFolder.length === 0 && (
          <div className={classesOne.labelFolder}>
            <button
              className={classesOne.btnFolderResponsive}
              onClick={submitData}
            >
              Create Folder
            </button>
          </div>
        )}
        <Table>
          <TableBody>
            {dataFolder.map((folder, index) => (
              <>
                <TableRow
                  key={index}
                  className={
                    activeFolder !== folder.id
                      ? classesOne.row
                      : classesOne.rowActive
                  }
                >
                  {editFolderName && activeFolder === folder.id ? (
                    <CustomTableCell>
                      <input
                        className={classesOne.editFolderName}
                        name="changeName"
                        autoFocus
                        onChange={saveEditFolder}
                        value={currentNameFolder}
                        onBlur={loseFocus}
                      />
                    </CustomTableCell>
                  ) : (
                    <StyledTableCell
                      onClick={getinfoFolder(folder.id, folder.folders)}
                    >
                      <div className={classesOne.responsiveFolder}>
                        <div className={classesOne.content}>
                          {folder.folders}
                        </div>
                        <div>
                          <button
                            type="button"
                            className={classesOne.buttonsResponsive}
                            onClick={editFolder}
                          >
                            <img
                              src={editPicture}
                              className={classesOne.menuPictures}
                              alt="edit folder name"
                            />
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            className={classesOne.buttonsResponsive}
                            onClick={delFolder}
                          >
                            <img
                              src={delPicture}
                              className={classesOne.menuPictures}
                              alt="delete folder"
                            />
                          </button>
                        </div>
                      </div>
                      {showMenu && activeFolder === folder.id ? (
                        <div>
                          <SimpleMenu
                            setEditFolderName={setEditFolderName}
                            submitData={submitData}
                          />
                        </div>
                      ) : null}
                    </StyledTableCell>
                  )}
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </div>
      <button type="button" onClick={submitData} className={classesOne.button}>
        <img src={addPicture} className={classesOne.picture} alt="add folder" />
        Add Folder
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
Folder.propTypes = {
  addFolderAction: PropTypes.func,
  updateFolderNameAction: PropTypes.func,
  dataFolder: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  ),
  activeFolder: PropTypes.string,
  dataNotes: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
  ),
  deleteNoteAction: PropTypes.func,
  deleteFolderAction: PropTypes.func,
  currentFolderIdAction: PropTypes.func
};
