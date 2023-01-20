import { Response } from "../../../Errors";
import { IGlobalUploads } from "../../../interfaces";
import { productErrors } from "../../../services";
export declare class GlobalUploads implements IGlobalUploads {
    uploadImage(formData: FormData): Promise<Response<productErrors, string>>;
    uploadDoc(formData: FormData): Promise<Response<productErrors, string>>;
}
