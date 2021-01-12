import axios from "axios";

const URL = "http://localhost:5000";

function upscalePhoto(image, scale) {
    return axios.post(`${URL}/upscale`, {
        img: image,
        upscale: scale,
    });
}

export { upscalePhoto };
