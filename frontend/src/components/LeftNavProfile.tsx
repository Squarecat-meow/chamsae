import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

import { useLogoutMutation } from "../queries/auth";
import { useSetting } from "../queries/setting";

export default function LeftNavProfile() {
  const { data: setting } = useSetting();
  const { mutate: logout, isLoading: isLogoutLoading } = useLogoutMutation();

  if (setting == null) {
    return <></>;
  }

  return (
    <div className="flex w-full items-center p-2">
      {setting.avatarFileId && (
        <img
          className="avatar w-10 rounded-full"
          src={`/file/${setting.avatarFileId}`}
        />
      )}
      {setting.userName != null ? (
        <span>
          {setting.userName}
          <span className="text-neutral-content ml-2">
            @{setting.userHandle}
          </span>
        </span>
      ) : (
        <span>@{setting.userHandle}</span>
      )}
      <button
        onClick={() => {
          logout();
        }}
        disabled={isLogoutLoading}
      >
        <ArrowLeftOnRectangleIcon className="text-error ml-4 h-6 w-6" />
      </button>
    </div>
  );
}
