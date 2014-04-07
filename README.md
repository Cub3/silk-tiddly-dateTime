#Silk Tiddly Date/Time

>A dateTime plugin for TiddlyWiki5

##Documentation

###Install

1. Create new tiddler (+)
2. Name tiddler ```$:/macros/silk/dateTime.js```
3. Copy and paste ```dateTime.js``` content into the tiddler body
4. Set type as ```application/javascript```
5. Add new field named ```module-type```
6. Set module-type to ```macro```
7. Refresh / Restart TiddlyWiki5

###How to Use

Call the macro with:

```
<<dateTime>>
```

Set the format in whichever way you like:

**Input:** ```<<dateTime "YYYY-0MM-0DD 0hh:0mm:0ss">>```

**Output:** 2014-04-07 12:13:04

**Input:** ```<<dateTime "0DD/0MM/YYYY at 0hh o'clock">> ```

**Output:** 07/04/2014 at 12 o'clock

You can also use your own timestamp by passing in a second parameter:

**Input:** ```<<dateTime "0DD/0MM/YYYY" "2013200">>```

**Output:** 31/07/2014

### Options

#### Format

Type: `String`  
Default: `YYYY-0MM-0DD 0hh:0mm:0ss`  
Values: `DD`, `MM`, `YY`, `HH`, `MM`, `SS`

#### Timestamp

Type: `String`
Default: `now()`  
Values: `Any JavaScript Timestamp`
