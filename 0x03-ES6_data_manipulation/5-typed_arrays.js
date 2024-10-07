// function returning a new array with Int8
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  const intView = new DataView(buffer);

  intView.setInt8(position, value);

  return intView;
} 
