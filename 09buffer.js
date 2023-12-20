const buffer = new Buffer.from("Prakash")

console.log(buffer.toJSON())


// raw binary data -> hexadecimal for every character bcz it leads to flooding
console.log(buffer)

console.log(buffer.toString())

buffer.write("Prakash Dsp")