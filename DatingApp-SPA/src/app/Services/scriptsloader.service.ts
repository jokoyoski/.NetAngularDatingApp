import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  {name:'misc',src:'../../assets/web/js/misc.js'},
  {name:'easydrop',src:'../../assets/web/js/jquery.easydropdown.js'},
  {name:'flexslider', src:'../../assets/web/js/jquery.flexslider.js'},
  
 
  {name:'wow',src:'../../assets/web/js/wow.min.js'},

{name:'wowinit',src:'../../assets/web/js/wow.init.js'},
];

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class ScriptsloaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  loadJS(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadJSFile(script)));
    return Promise.all(promises);
  }


  loadJSFile(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}









