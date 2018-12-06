export default function transformToTimeSeries(object) {
  const results = [];
  const keys = Object.keys(object);

  keys.forEach(key => results.push({ x: key, y: object[key] }));
  return results;
}
