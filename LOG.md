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
* 
