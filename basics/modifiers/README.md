You can update specific fields in a document using atomic update modifiers

- $inc : increment/create a numeric field
- $set : sets/udpate a field
- $unset: delete a field


Always use $ operators for modifying individual key/value pairs.

- Arrays Modifiers
  - $push: create/add elements to array
    - $each: create/add multiple values
    - $slice: define the limits of push each values
    - $sort : sort before trimmign elements onto the array
    - $ne: adding values if they are not exists
    - $pop: treat an array as a queque
    - $pull: remove element of an array with a criteria
