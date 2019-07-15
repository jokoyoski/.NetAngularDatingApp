import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Directive({
  selector: '[appRole]' 
})
export class RoleDirective {
@Input() appRole:string[]; 
isVisible=false;
  constructor(private viewContaierRef:ViewContainerRef,private templateRef:TemplateRef<any>,private authService:AuthService) { }
ngInit(){

  const userRoles=this.authService.decodedToken.role as Array<string>;
  if(!userRoles)
  {
    this.viewContaierRef.clear();
  }

  if(this.authService.roleMatch(this.appRole)){
    if(!this.isVisible)
    {
      this.isVisible=true;
      this.viewContaierRef.createEmbeddedView(this.templateRef);
    }else{
      this.isVisible=false;
      this.viewContaierRef.clear();
    }
  }
}
} 
