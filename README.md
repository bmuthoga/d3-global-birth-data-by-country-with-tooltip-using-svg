# Global Births Data Scatterplot v2
This is a scatterplot displaying birth data by country in the year 2011, built with `D3.JS` and `SVGs`

This scatterplot is an alternate version of [this](https://github.com/bmuthoga/d3-global-birth-data-by-country-using-svg), but with a `tooltip` that is displayed on `mouseover` or `touchstart`

The graph represents the world's nations' `Births per Capita` vs `Life Expectancy`

The scatterplots' `color scale` (`limegreen -> black`) represents the nations' `population density` (`low -> high`), while their `radius scale` (`2 -> 40`) represents the nations' `births` (`low -> high`)

`Hovering` over a nation's scatterplot (or `touching` for devices that support touch) displays a tooltip with more detailed information

The data used has been sourced and compiled from [UN data](https://data.un.org/)

The app, and online editor, can also be found here on [CodeSandbox](https://codesandbox.io/s/d3-global-birth-data-by-country-with-tooltip-using-svg-g83r1)

Below is a preview of how it looks like:

<img src="https://i.ibb.co/Swjj3sC/d3-global-birth-data-by-country-with-tooltip-using-svg.gif" width="300" height="200" alt="scatterplot-preview" />
