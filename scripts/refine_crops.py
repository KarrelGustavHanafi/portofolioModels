import os
from PIL import Image

port = Image.open('HALAMAN THE PORTOFOLIO.png')
# Front look clean (head starts at y ~ 142)
port.crop((160, 142, 470, 1070)).save('public/assets/portfolio/look_white_balloon_front.png')
# Side look clean
port.crop((550, 142, 850, 1070)).save('public/assets/portfolio/look_denim_ruffle_side.png')
# Both models together clean
port.crop((150, 142, 860, 1070)).save('public/assets/portfolio/editorial_lookbook_duo.png')

# About: Tata Letak Editorial Tentang Model-1.png (1536 x 1024)
abt = Image.open('Tata Letak Editorial Tentang Model-1.png')
w, h = abt.size

# Vertical filmstrip on the right (3 portrait frames):
# Let's crop it around x: 1240 to 1520, y: 100 to 700
filmstrip = abt.crop((1240, 100, 1520, 690))
filmstrip.save('public/assets/about/filmstrip_vertical.png')

# Horizontal eyes cutout:
eyes = abt.crop((650, 165, 1050, 360))
eyes.save('public/assets/about/eyes_banner.png')

# Model with telephone hero center:
model_phone = abt.crop((80, 160, 1370, 960))
model_phone.save('public/assets/about/model_telephone_hero.png')

print("Refined crops saved!")
