# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Task.create({title: 'Clean Sink', content: 'Something'})

taskOne = Task.create(title: "Do laundry", content: "this is the content")

taskTwo = Task.create(title: "Grocery Shopping", content: "this is the content")
