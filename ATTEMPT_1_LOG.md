# LOG

* **started at 1355 on 06-01-2018**
* wrote container for **main** component at 1359
* wrote reducers for file and directory at 1405
* used props to pass file and directory at 1407
* error: props return null at 1407
* error thrown due to react native being unable to change store on the fly
* error resolved by reloading app
* start to use RNFS to read files and folders
* wrote basic code to get files and folders at 1423
* **ended at 1423 on 06-01-2018**

* **started at 1634 on 06-01-2018**
* refactor **main** component to handle no files or directories at 1648
* wrote updateFileDirectoryEpic to return list of files and directories at 1658
* finished making directoryReducer and FileReducer listen to updateFileDirectoryEpic at 1658
* finished code to get files and directory in async method at 1720
* **ended at 1720 on 06-10-2018**

* **started at 1125 on 06-01-2018**
* moved code to read files and directories from **main** component to epic at 1128
* updated epic to get files and directories from external storage and return them at 1143
* **ended at 1143 on 07-01-2018**

* **started at 1515 on 07-01-2018**
* started styling components at 1515
* **ended at 1622 on 07-01-2018**

* **started at 1738 on 07-01-2018**
* error: FlatList component not scrolling at 1750
* error resolved by removing `flex:1` from style at 1755
* finished styling at 1804
* used TouchableNativeFeedback to make files and folder into buttons at 1815
* **ended at 1816 on 07-01-2018**

* **started at 1618 on 08-01-2018**
* wrote code to handle no file and no directory at 1622
* wrote reducer to hold current path at 1627
* wrote code to go into directory at 1646
* **ended at 1656 on 08-01-2018**

* **started at 1750 on 08-01-2018**
* updated drawer styles at 1800
* wrote code to go back at 1819
* **ended at 1822 on 08-01-2018**

* **started at 1522 on 09-01-2018**
* refactored JSX to display file into **FileList** component at 1600
* **ended at 1600**

* **started at 1356 on 10-01-2018**
* finished **Icon** component to render icon for file at 1455
* **ended at 1456 on 10-01-2018**

* **started at 1509 on 10-01-2018**
* wrote code to display icon based on file type at 1527
* created `fileListItem` folder
* moved **Icon** component into `fileListItem` folder
* wrote **TextDisplay** component inside `fileListItem` folder at 1546
* **ended at 1551 on 10-01-2018**

* **started at 1412 on 11-01-2018**
* updated file name display for file names longer than 20 characters at 1422
* used `Animate` and `Easing` to animate file names in **TextDisplay** at 1445
* animation doesn't work
* start using setTimeout to display file name
* finished wwriting timeout to display file name at 1459
* error: irrespective of ms passed to timeout, component gets updated very quickly
* error resolved at 1508
* resolved error by switching to setInterval
* removed text animation at 1513
* bug: touch event is not recognized for files at 1514
* **ended at 1516 on 11-01-2018**
