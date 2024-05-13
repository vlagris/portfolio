import SocialMediaItem from "@components/SocialMedia/SocialMediaItem.tsx";
import IconGithub from "@assets/icons/icon-github.svg?react";
import IconTelegram from "@assets/icons/icon-telegram.svg?react";


function SocialMedia() {
  return (
    <div className="flex items-center">
      <SocialMediaItem to="#">
        <IconGithub className="stroke-gray-600 dark:stroke-gray-300"/>
      </SocialMediaItem>
      <SocialMediaItem to="#">
        <IconTelegram className="fill-gray-600 dark:fill-gray-300"/>
      </SocialMediaItem>
    </div>
  );
}

export default SocialMedia;