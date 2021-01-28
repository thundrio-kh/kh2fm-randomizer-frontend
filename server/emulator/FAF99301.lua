HTTP = require("socket.http")

function _OnInit()
	local response = HTTP.request("http://localhost:3000/seed")

	local file = io.open("FAF99301 Seed.lua", "w")

	io.output(file)

	io.write(response)

	io.close(file)
end

function _OnFrame()
end

--[[
	support code, remove when putting this in actual emulator
]]

_OnInit()

for i=1, 5 do
	_OnFrame()
end