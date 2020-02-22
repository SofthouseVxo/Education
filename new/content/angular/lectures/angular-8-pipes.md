### 8. Angular</h3>
##### Pipes</h5>

---

#### "Angular pipes, a way to write display-value transformations that you can declare in your HTML."</h4>

---

	
#### Pipes</h4>

* A Pipe takes input data as input and transforms it into desired output.
* Angular provides us with a set of built in pipes.
* It is also possible to create custom pipes.

---

#### Built in pipes</h4>

* Date
* Uppercase & lowercase
* Json
* <a href="https://angular.io/api?type=pipe" target="_blank">Full list of Pipes</a>

---

#### Pipes

* To use a pipe apply a (|) followed by the pipe name.
* To pass parameters to the pipe use (:)
* It is also possible to chain pipes.

```JavaScript
import { Component } from '@angular/core';

@Component({
	selector: 'app-birthday',
	template: `
	<p>The birthday is {{ birthday | date }}</p> 
	<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }}</p>
	{{ birthday | date | uppercase}}
	`
})
export class HeroBirthdayComponent {
	birthday = new Date(1988, 3, 15); // April 15, 1988
}
```

---

#### Custom Pipe

```JavaScript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'multiplyWithFive'
})

export class MultiplyWithFivePipe implements PipeTransform {

	transform(value: any, ...args: any[]): any {
		return value * 5;
	}

}						
```

---

####  Using the Custom Pipe

```HTML
<p>{{10 | multiplyWithFive}}</p> <!-- Will display 50 -->
```
