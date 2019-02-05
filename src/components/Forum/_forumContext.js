import React from "react";

export default React.createContext({
  communityModalOpen: false,
  closeCommunityModal: () => {},
  openCommunityModal: () => {}
});
