import java.awt.*;  
import java.applet.*;  
  
  
public class Imager extends Applet 
{  
  
	Image picture;  

	public void init() {  
		picture = getImage(getDocumentBase(),"index.png");  
	}  

	public void paint(Graphics g) {  
		g.drawImage(picture, 40,40, this);  
	}  
      
}  