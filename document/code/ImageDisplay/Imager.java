import java.awt.*;
import java.applet.*;


public class Imager extends Applet
{

	Image picture;

	public void init() {
		picture = getImage(getDocumentBase(),"WBUT9.jpg");  
	}

	public void paint(Graphics g) {
		g.drawImage(picture, 40,40, this);
	}

}
