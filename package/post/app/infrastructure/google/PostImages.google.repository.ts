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
          console.log(file);
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
      console.log(error.message);
    }
  }

  //delete file function
  async deleteFile(fileId) {
    try {
      const response = await drive.files.delete({
        fileId: fileId, // file id
      });
      console.log(response.data, response.status);
    } catch (error) {
      console.log(error.message);
    }
  }

  //function to upload the file
  async uploadFile(name, mimeType, filePath) {
    console.log("UPLOAD A DRVE");
    try {
      const response = await drive.files.create({
        requestBody: {
          name: name, //file name
          mimeType: mimeType,
          parents: ["1VK79UjtWInrW9Izk1KbcGh0DYuBUKbmA"],
        },
        media: {
          mimeType: mimeType,
          body: fs.createReadStream(filePath),
        },
      });
      // report the response from the request
      console.log("RES");
      console.log(response.data);
      this.generatePublicUrl(response.data.id);
      this.listDriveFiles();
      return response.data;
    } catch (error) {
      //report the error message
      console.log(error.message);
    }
  }
}
