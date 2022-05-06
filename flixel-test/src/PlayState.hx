package;

import flixel.FlxG;
import flixel.FlxState;
import flixel.text.FlxText;
using StringTools;

class PlayState extends FlxState
{
	var text:FlxText;
	var framesSinceLastColorChange:Int = 0;
	var frames:FlxText;

	override public function create()
	{
		super.create();

		text = new FlxText(0, 0, FlxG.width, "Hello World! I am changing colors every second!");
		text.setFormat(null, 64, 0xffffff, "center");
		text.screenCenter(XY);
		add(text);

		frames = new FlxText(0, FlxG.height - 16, FlxG.width, "0");
		frames.setFormat(null, 16, 0xffffff, "center");
		add(frames);
	}

	override public function update(elapsed:Float)
	{
		super.update(elapsed);
		
		framesSinceLastColorChange++;

		// check if framesSinceLastColorChange is equal to 15
		if (framesSinceLastColorChange == 15)
		{
			// change the color of the text
			var colorR = Random.int(0, 255);
			var colorG = Random.int(0, 255);
			var colorB = Random.int(0, 255);
			text.color.red = colorR;
			text.color.green = colorG;
			text.color.blue = colorB;
			framesSinceLastColorChange = 0;
		}

		// update the frames counter with the variable framesSinceLastColorChange
		frames.text = Std.string(framesSinceLastColorChange);
	}
}
