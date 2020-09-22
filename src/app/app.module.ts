// module quản lý component, phân nhóm cùng nhóm thì xài được, không cùng nhóm thì không xài được
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from './demo/demo.component';
import { Buoi1ComponentComponent } from './buoi1-component/buoi1-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1ComponentComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent, // các component sử dụng (lẫn nhau) trong module này
  ],
  imports: [BrowserModule], // Nơi để import các module khác vào module này
  providers: [],
  bootstrap: [AppComponent], // nơi chứa component sử dụng trong index.html
})
export class AppModule {}
