function addFurniture(type, modelUrl) {
    const root = document.getElementById('furniture-root');
    let entity = document.createElement('a-entity');
    entity.setAttribute('gltf-model', modelUrl || models[type]);
    entity.setAttribute('position', `${Math.random()*2-1} 0 ${Math.random()*2-1}`);
    entity.setAttribute('scale', '1 1 1');
    entity.setAttribute('class', 'furniture');
    entity.setAttribute('shadow', 'cast: true; receive: true');
    entity.setAttribute('grab-move-controls', '');
    entity.setAttribute('clickable', '');
    entity.setAttribute('data-name', type);
    entity.setAttribute('data-locked', 'false');
    entity.addEventListener('click', function (evt) {
      selectFurniture(entity);
      evt.stopPropagation();
    });
    root.appendChild(entity);
    selectFurniture(entity);
  }