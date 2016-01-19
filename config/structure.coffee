# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "My Groups"
      id: "myGroups"
      location: "myGroups#index"
    }
    {
      title: "Find Groups"
      id: "findGroup"
      location: "findgroup#index"
    }
    {
      title: "Create Group"
      id: "createGroup"
      location: "createGroup#index"
    }
  ]

  #rootView:
  #  location: "login#index"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  drawers:
    left:
      id: "leftDrawer"
      location: "example#drawer"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"
  
  initialView:
      id: "initialView"
      location: "login#index"
