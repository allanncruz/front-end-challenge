//Importar imagens usadas
import bannerVideo from "@/assets/banner-video.jpg";

export default {
    data() {
        return {
            video: {
                url: "https://player.vimeo.com/video/57398751?background=1",
                allow: "autoplay"
            },
            bannerVideo: {
                url: bannerVideo
            },
        };
    }
};