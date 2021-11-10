import { Directive, Input, OnInit,TemplateRef ,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdminPanel]'
})
export class AdminPanelDirective implements OnInit {

  @Input() 
  appIsAdmin: string = "";
  appAdminPanel:string[]=["Scott","William","Brett","Jule"];

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }

  ngOnInit(){

       if(this.appAdminPanel.indexOf(this.appIsAdmin)>1)
          {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
       else
         {
          this.viewContainer.clear();
         }
      
  }
}