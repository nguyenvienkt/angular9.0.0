import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo", // sử dụng selector như tag name của component, tabname để hiển thị nội dung của component này
  templateUrl: "./demo.component.html", // là nơi hiển thị nội dung UI của component, giống nội dung hàm render
  styleUrls: ["./demo.component.scss"], // phần css của component này (component khác sử dụng không được)
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
