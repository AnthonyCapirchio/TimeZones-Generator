Please visit the [TimeZones Generator page](http://anthonycapirchio.github.io/TimeZones-Generator/) to use this script as online tool.

## Generation 

To generate a timezone list, call the `generate()` method.

```javascript
var timeZones = timeZoneGenerator.generate({
	startTag  : '[',
	endTag    : ']',
	separator : ',',
	entry     : '"{TEXT}" : "{VALUE}"'
});
```

## Available template tags

| Name    | Tag       | Data sample                                     |
|---------|-----------|-------------------------------------------------|
| Text    | {TEXT}    | (UTC+01:00) Brussels, Copenhagen, Madrid, Paris |
| Value   | {VALUE}   | Romance Standard Time                           |
| Abbr    | {ABBR}    | RDT                                             |
| Offset  | {OFFSET}  | 2                                               |
| Isdst   | {ISDST}   | true                                            |