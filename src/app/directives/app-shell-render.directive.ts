import {Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef} from '@angular/core';
import {isPlatformServer} from '@angular/common';

@Directive({
  selector: '[appShellRender]'
})
export class AppShellRenderDirective implements OnInit {

  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private _platformId // informs us where the rendering occurring (on the server or on the client)
  ) {
  }

  ngOnInit() {
    if (isPlatformServer(this._platformId)) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
