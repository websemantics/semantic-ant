`Button` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Button`

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Button` rather than using the `icon` property.


```html
<button class="ui small circular primary icon button">
  <i class="search icon"></i>
</button>
<button class="ui small primary button">
  <i class="search icon"></i>
  Search for
</button>
<br/><br/>
<button class="ui small circular basic icon button">
  <i class="search icon"></i>
</button>
<button class="ui small basic button">
  <i class="search icon"></i>
  Search
</button>
```
