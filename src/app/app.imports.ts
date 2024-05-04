import { RouterOutlet } from "@angular/router";
import { ChildComponent } from "./components/child/child.component";
import { FormsModule } from "@angular/forms";
import { ExampleDirective } from "./directives/example.directive";

export const appImports = [RouterOutlet,ChildComponent,FormsModule, ExampleDirective]