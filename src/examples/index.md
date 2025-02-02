---
layout: default.html
title: Examples
---

## {{ title }}

<ul>
	{%- for example in collections.examples -%}
		<li><a href="{{ example.url }}">{{ example.data.title }}</a></li>
	{%- endfor -%}
</ul>
