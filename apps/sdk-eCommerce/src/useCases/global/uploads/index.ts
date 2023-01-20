import { Response } from "../../../Errors";
import { IGlobalUploads } from "../../../interfaces";
import { productErrors } from "../../../services";
import { uploadMutations } from "../../../services/mutations/upload";
import { Try } from "../../../utils";

export class GlobalUploads implements IGlobalUploads {
  async uploadImage(
    formData: FormData
  ): Promise<Response<productErrors, string>> {
    return await Try(uploadMutations.uploadImage, formData);
  }

  async uploadDoc(
    formData: FormData
  ): Promise<Response<productErrors, string>> {
    return await Try(uploadMutations.uploadImage, formData);
  }
}
