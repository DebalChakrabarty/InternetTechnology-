import java.applet.*;
import java.awt.*;
/* <applet code = "ImageDisplay" width = 500 height = 500> </applet> */

public class ImageDisplay extends Applet
{
	Image picture;
	public void init()
	{
		picture = getImage(getDocumentBase(),"index.jpg");
	}
	public void paint(Graphics g)
	{
		g.drawImage(picture,225,225,this);
	}
}
