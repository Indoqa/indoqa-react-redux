#Directory layout
### Main layout

```├── src```    
```│   ├── dev``` *dev server config*     
```│   ├── doc``` *markup docs*      
```│   ├── main``` *the application*     
```│   └── test``` *unit tests*      
```├── target```    
```│   └── app``` *base dir of generated production files*    
```├── package.json``` *dependency and build management*     
```└── webpack.config.js``` *babel/stylus/hot reloading*     

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
```│   │   ├── feature1```    
```│   │   │   ├── actions``` *actions of feature1*    
```│   │   │   ├── components```  *components of feature1*    
```│   │   │   ├── reducers``` *reducers of feature1*  
```│   │   ├── feature2```   
```│   │   │   ├── actions``` *actions of feature2*    
```│   │   │   ├── components```  *components of feature2*       
```│   │   │   ├── reducers``` *reducers of feature2*     
```│   │   ├── index.html``` *basic html served by dev server*   
```│   │   ├── index.js``` *main application entry point*   
```│   │   ├── routes.js``` *route configuration ("page mounting")*  
```│   │   └── store.js``` *all redux configuration*   
