# LOG

* **started at 0930 on 12-01-2018**
* started copying boilerplate from deprecated file manager 0930
* app works as expected at 0947
* **ended at 0947 on 14-01-2018**

* **started at 1520 on 14-01-2018**
* add `FlatList` to display lists at 1526
* wrote container for **main** component at 1534
* wrote reducer to manage file list info at 1536
* start refactoring **main** component into separate components at 1539
* finished refactoring at 1543
* start add code for header at 1543
* finished header and styled components at 1605
* start writing epic to get file names from device storage at 1607
* finished epic and updated fileList reducer
* finished writing action to update fileList at 1632
* **ended at 14-01-2018**

* **started at 2111 on 14-01-2018**
* updated **FileList** component to display files from device storage
* finished writing **Icon** component to display apppropriate icon at 2135
* refactored **FileList** component with functions and provided comments for each function at 2146
* updated styles for **FileList** component at 2151
* added touch listener to list items at 2156
* **ended at 2157 on 14-01-2018**

* **started at 1009 on 15-01-2018**
* start writing reducer to hold current path at 1022
* finished code to go into directories and display files at 1054
* **ended at 1055 on 15-01-2018**

* **started at 1320 on 15-01-2018**
* refactored **FileList** component to update currentPath at 1329
* added button to traverse back at 1338
* start refactoring **Main** component at 1340
* moved header code from **Main** component into **Header** component at 1349
* finished adding functionality to back button at 1353
* finished adding code to display image based upon file type at 1415
* **ended at 1416 on 15-01-2018**

* **started at 1422 on 16-01-2018**
* start adding code for legend at 1426
* finished boilerplate for **Legend** component at 1453
* error: `attempt to get length of null array`
* error thrown at 1503
* error is thrown only when trying to enter `UDiskA` or `Private` directory
* **started at 1509 on 16-01-2018**

* **started at 1603 on 21-01-2018**
* added image to **legend** component at 1613
* added touch listeners to **legend** component at 1619
* finished adding functionality to **legend** component at 1628
* start writing boilerplate for quick access menu
* **ended at 1702 on 21-01-2018**

* **started at 1820 on 22-01-2018**
* added default image to **Nav** component at 1833
* updated epic to ignore `Private` and `UDiskA` folders at 1841
* **ended at 1845 on 22-01-2018**

* **started at 1742 on 23-01-2018**
* refactored epic to set file type
* removed file type checking functionality from **Icon** component at 1755
* start adding navigation to app at 1805
* removed **Header** component at 1815
* used `react-navigation` to add navigation to page
* **ended at 1818 on 23-01-2018**

* **started at 1711 on 24-01-2018**
* start switching from `stact-navigator` to `drawer-navigator` at 1715
* restored **header** component at 1720
* wrote **ImageViewer** component at 1735
* enabled navigation between **Main** and **ImageViewer**
* set up images to be displayed when image file is clicked at 1743
* **ended at 1744 on 24-01-2018**

* **started at 1750 on 15-01-2018**
* wrote container for **ImageViewer** component
* wrote reducer to hold selected image details
* wrote action to update selectedImage reducer
* updated **ImageViewer** component to display selected Image at 1831
* bug: unable to display images inside directories with blank space in their name
* resolved error at 1837
* **ended at 1838 on 25-01-2018**

* **started at 2139 at 25-01-2018**
* updated README.md at 2142
* **ended at 2142 on 25-01-2018**

* **started at 0909 on 26-01-2018**
* start refactoring **updateFileListEpic** at 0910
* finished refactoring **updateFileListEpic** to display files at the end and in sorted order at 0943
* note: there is a visible delay for **updateFileListEpic** to complete running
* separating code into multiple epics can improve performance
* **ended at 0952 on 26-01-2018**

* **started at 1522 on 26-01-2018**
* used linking to open files at 1525
* **ended at 1541 on 26-01-2018**

* **started at 1730 on 27-01-2018**
* replace alerts with toasts inside **FileList** component at 1733
* instead of making one app do multiple functions, decided to separate functions between multiple apps
* switched back to StackNavigator for simplicity at 1740
* rename **Icon** component to **Icons** component
* finished updating **Icons** component to use `react-native-vector-icons` at 1808
* removed `DrawerLayoutAndroid` from **Main** component at 1811
* finished installing `react-native-cross-platform-responsive-dimensions` at 1827
* **ended at 1827 on 27-01-2018**

* **started at 1133 on 28-01-2018**
* install and link `react-native-device-info` at 1134
* updated AndroidManifest.xml to fix app in portrait mode
* start updating styles at 1145
* finished styling using `react-native-cross-platform-responsive-dimensions` api at 1208
* updated **Icons** component to display thumbnail of image and audio files
* **ended at 1236 on 28-01-2018**

* **started at 1224 on 29-01-2018**
* testing custom header component at 1240
* **ended at 1330 on 29-01-2018**

* **started at 1854 on 29-01-2018**
* updated styles to make buttons in **Legend** component more visible at 1925
* updated separator in **Legend** component to use vector icons
* removed `Settings` route at 1942
* **ended at 1950 on 29-01-2018**

# **understood why few files always are opened with PDF viewer**
* PDF viewer was selected as **always open with** in the past
* file names contain `.` followed by strings. **Linking** api confuses this with file ending

* **started at 1809 on 05-02-2018**
* start modifying fileList epic and reducer to allow refreshing at 1814
* finished adding refresh support to app at 1819
* **ended at 1821 on 05-02-2018**

* **started at 1624 on 07-02-2018**
* switched back to `DrawerNavigator` at 1636
* start writing boilerplate for ImageViewer at 1639
* **ended at 1640 on 07-02-2018**

* **started at 1706 on 07-02-2018**
* finished basic boilerplate for **ImageViewer** at 1721
* phone is not responding
* stopping for now
* **ended at 1722 on 07-02-2018**

* **started at 1441 on 08-02-2018**
* added styles to **ImageViewer** at 1518
* stopping due to no internet
* **ended at 1519 on 08-02-2018**

* **started at 1050 on 09-02-2018**
* finished adding styles to **ImageViewer** at 1110
* wrote reducer to hold image list at 1116
* populated **imageListReducer** with dummy values
* finished writing epic to get images asynchronously at 1121
* finished writing action for starting image list update at 1126
* finished adding support for refreshing imageList at 1148
* **ended at 1148 0n 09-02-2018**

* **started at 1712 on 09-02-2018**
* wrote code to read and display images from storage at 1732
* **ended at 1733 on 09-02-2018**

* **started at 1425 on 11-02-2018**
* wrote **Header** component for ImageViewer at 1433
* added header to ImageViewer at 1433
* start sorting imageList based on folder
* updated **imageListEpic** to group images at 1458
* **ended at 1458 on 11-02-2018**

* **started at 1517 on 15-02-2018**
* finished modifying **updateImageListEpic** to group images by group_name at 1542
* start refactoring **ImageViewer** to display folder contents at 1546
* finished nesting `StackNavigator` inside `DrawerNavigator` at 1609
* **ended at 1609 on 15-02-2018**

* **started at 1038 on 18-02-2018**
* start writing boilerplate for **imageFileList** at 1039
* finished boilerplate for **imageFileList** at 1105
* bug found: unable to navigate back to FileManager screen after entering Gallery screen
* finished writing boilerplate for **SelectedImage** at 1117
* able to view image folders, image in each folder and each image
* bug fixed. bug was due to routes in DrawerNavigator and StackNavigator having same key
* start styling **imageFileList** at 1123
* use background image instead of image in **ImageFolderList** at 1200
* finished styling at 1209
* **ended at 1219 on 18-02-2018**

* **started at 1731 on 18-02-2018**
* updated code to dynamically display header in **ImageViewer** at 1741
* added styles to header in **ImageViewer** at 1753
