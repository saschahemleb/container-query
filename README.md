# container-query
helper lib to implement container queries

## how to use
```
  import ContainerQuery from 'container-query';
  
  const cq = new ContainerQuery(window);
  
  cq.add(document.querySelector('.js-cq-watch'), {
    // at which width and height breakpoints should the classes be added
    'mw': [200, 400, 600, 800, 1000],
    'mh': [400, 800, 1200],
  });
```
