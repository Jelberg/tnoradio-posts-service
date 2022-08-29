import drive from "../../../loaders/google";
import { PostImageRepository } from "../../domain/services/Post.images.repository";
const path = require("path");
const fs = require("fs");

export class GoogleRepository implements PostImageRepository {
  getPostImage(imageName: any, options: any, res: any) {
    throw new Error("Method not implemented.");
  }

  listDriveFiles() {
    drive.files.list({}, (err, res) => {
      if (err) throw err;
      const files = res.data.files;
      if (files.length) {
        files.map((file) => {
          //  console.log(file);
        });
      } else {
        console.log("No files found");
      }
    });
  }

  async generatePublicUrl(fileId) {
    try {
      //change file permisions to public.
      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });

      //obtain the webview and webcontent links
      const result = await drive.files.get({
        fileId: fileId,
        fields: "webViewLink, webContentLink",
      });
      console.log(result.data);
    } catch (error) {
      console.log("Error 1");
      console.log(error.message);
    }
  }

  //delete file function
  async deleteFile(fileId) {
    console.log(fileId);
    try {
      const response = await drive.files.delete({
        fileId: fileId, // file id
      });
      console.log(response.data, response.status);
    } catch (error) {
      console.log("Error 3");
      console.log(error.message);
    }
  }

  //function to upload the file
  async uploadFile(name, mimeType, filePath) {
    try {
      this.listDriveFiles();
      const response = await drive.files.create({
        requestBody: {
          name: name, //file name
          mimeType: mimeType,
          parents: ["1qeJZuLFFo_oSL0Qo7A__byzVKjiPvcsK"],
        },
        media: {
          mimeType: mimeType,
          body: fs.createReadStream(filePath),
        },
      });
      this.generatePublicUrl(response.data.id);
      const imageUrl = `https://drive.google.com/uc?id=${response.data.id}`;
      return imageUrl;
    } catch (error) {
      console.log("Error 2");
      //report the error message
      console.log(error.message);
    }
  }

  async updateFile(
    name: string,
    mimeType: string,
    filePath: string,
    fileId: string
  ) {
    try {
      //console.log(name);
      //console.log(filePath);
      //console.log(fileId);
      this.deleteFile(fileId);
      return this.uploadFile(name, mimeType, filePath);
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }
}
