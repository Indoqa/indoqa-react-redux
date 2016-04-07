#Directory layout
## Main layout

### Application structure 

```── src```    
```│   ├── main```   
```│   │   ├── app```   
```│   │   │   ├── components```    
```│   │   │   │   ├── App.react.js``` *Main app skeleton markup (header, footer, navigation,..)*  
```│   │   │   │   └── App.styl``` *Main app styling*  
```│   │   │   ├── reducers```    
```│   │   │   │   └── index.js``` *root reducer that combines all feature reducers*   
```│   │   │   └── utils```   
```│   │   ├── feature1``` *actions, components, reducers of feature1*     
```│   │   ├── feature2``` *actions, components, reducers of feature2*         
```│   │   ├── index.html``` *basic html served by dev server*   
```│   │   ├── index.js``` *main application entry point*   
```│   │   ├── routes.js``` *route configuration ("page mounting")*  
```│   │   └── store.js``` *all redux configuration*   
