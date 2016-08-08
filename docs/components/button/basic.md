There are primary button, default button, ghost button and dashed button in antd.

`type` can be set as `primary` or `ghost` or `dashed`, in order to create primary button or ghost button or dashed button. If nothing is provided to `type`, we will get default button. Users can tell the significance of button from it's appearance.

Primary button and default button can be used without other button, but ghost button must be used with primary button.

```html
<button class="ui primary small button">
    Primary
</button>
<button class="ui small default button">
    Default
</button>
<button class="ui small basic button">
    Ghost
</button>
```
