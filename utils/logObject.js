import util from 'util';

function logObject(obj) {
  console.log(
    util.inspect(obj, { showHidden: false, depth: null, colors: true })
  );
}

export default logObject;
