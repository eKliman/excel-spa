import {$} from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise((resolve) => {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizible"]');
    const startCoords = $parent.getCoords();
    const type = $resizer.data.resize;
    const sideProp = type === 'col' ? 'bottom' : 'right';
    let value;

    $resizer.css({opacity: 1, [sideProp]: '-5000px'});

    document.onmousemove = (e) => {
      if (type === 'col') {
        const delta = e.pageX - startCoords.right;
        value = startCoords.width + delta;
        $resizer.css({right: -delta + 'px'});
      } else {
        const delta = e.pageY - startCoords.bottom;
        value = startCoords.height + delta;
        $resizer.css({bottom: -delta + 'px'});
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      if (type === 'col') {
        $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((element) => {
          $(element).css({width: value + 'px'});
        });
        $resizer.css({
          bottom: 0,
          right: '-2px',
        });
      } else {
        $parent.css({height: value + 'px'});
        $resizer.css({
          bottom: '-2px',
          right: 0,
        });
      }

      resolve({
        value,
        type,
        id: $parent.data[type],
      });

      $resizer.css({
        opacity: 0,
      });
    };
  });
}
