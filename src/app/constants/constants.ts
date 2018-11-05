export class Constants {
    public static ALERTS = {
        TYPE: {
          SUCCESS: "success",
          ERROR: "error",
          WARNING: "warning"
        },
        TITLE: {
          UPLOADED: "Uploaded!",
          ERROR: "Whoops!",
          CONFIRM_CHOICE: "Are you sure?",
        },
        MESSAGE: {
          ERROR_MESSAGE: "Something went wrong. Please try later!",
          FILE_UPLOADED: "File has been uploaded.",
          CONFIRM_CHOICE: "You won't be able to revert this!",
        },
        BUTTON_COLOR: {
          CONFIRM: "#3085d6",
          CANCEL: "#d33"
        }
    };

    public static TABLE_COLUMNS = ["Name", "Size (bytes)", "Action"];
}