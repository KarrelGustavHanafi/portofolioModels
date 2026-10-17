import os
from PIL import Image

os.makedirs('public/assets/portfolio', exist_ok=True)
os.makedirs('public/assets/collaborations', exist_ok=True)
os.makedirs('public/assets/about', exist_ok=True)
os.makedirs('public/assets/home', exist_ok=True)

# 1. THE PORTFOLIO CROPS (HALAMAN THE PORTOFOLIO.png: 1024 x 1536)
port = Image.open('HALAMAN THE PORTOFOLIO.png')
w, h = port.size

# Look 1: Front pose with white balloon skirt
look1 = port.crop((150, 130, 470, 1080))
look1.save('public/assets/portfolio/look_white_balloon_front.png')

# Look 2: Side profile with tiered ruffle denim skirt
look2 = port.crop((540, 130, 850, 1080))
look2.save('public/assets/portfolio/look_denim_ruffle_side.png')

# Both models together (editorial duo)
editorial_duo = port.crop((140, 120, 870, 1100))
editorial_duo.save('public/assets/portfolio/editorial_lookbook_duo.png')

# 5 Garment flatlays
garment1 = port.crop((55, 1170, 195, 1360)) # ocean starfish tank
garment1.save('public/assets/portfolio/garment_ocean_star_tank.png')

garment2 = port.crop((230, 1180, 390, 1360)) # denim ruffle skirt
garment2.save('public/assets/portfolio/garment_denim_ruffle_skirt.png')

garment3 = port.crop((440, 1170, 560, 1360)) # striped knit star halter
garment3.save('public/assets/portfolio/garment_striped_halter.png')

garment4 = port.crop((620, 1175, 745, 1360)) # jellyfish buckle tank
garment4.save('public/assets/portfolio/garment_jellyfish_tank.png')

garment5 = port.crop((810, 1175, 935, 1360)) # blue patterned camisole
garment5.save('public/assets/portfolio/garment_patterned_camisole.png')

# 2. BRAND COLLABORATIONS CROPS (HALAMAN COLLBAA.png: 1024 x 1536)
collab = Image.open('HALAMAN COLLBAA.png')

# 01.jpg - Model in oversized jacket
win01 = collab.crop((420, 105, 715, 565))
win01.save('public/assets/collaborations/collab_01_jacket_model.png')

# 02.jpg - Green cap
win02 = collab.crop((115, 275, 395, 465))
win02.save('public/assets/collaborations/collab_02_green_cap.png')

# 03.jpg - Studded belt
win03 = collab.crop((715, 220, 975, 370))
win03.save('public/assets/collaborations/collab_03_studded_belt.png')

# 04.jpg - Model on BMX bike
win04 = collab.crop((185, 448, 425, 630))
win04.save('public/assets/collaborations/collab_04_bmx_rider.png')

# 05.jpg - Sunglasses
win05 = collab.crop((435, 460, 678, 628))
win05.save('public/assets/collaborations/collab_05_sunglasses.png')

# 06.jpg - Model in plaid jacket and wide pants
win06 = collab.crop((655, 372, 955, 635))
win06.save('public/assets/collaborations/collab_06_plaid_model.png')

# 07.jpg - Vintage Hard Rock cap
win07 = collab.crop((85, 638, 340, 825))
win07.save('public/assets/collaborations/collab_07_hardrock_cap.png')

# 08.jpg - Model in striped polo & denim
win08 = collab.crop((362, 668, 620, 888))
win08.save('public/assets/collaborations/collab_08_polo_model.png')

# 09.jpg - Adidas track jacket
win09 = collab.crop((635, 650, 915, 855))
win09.save('public/assets/collaborations/collab_09_track_jacket.png')

# 3. ABOUT CROPS (Tata Letak Editorial Tentang Model-1.png: 1536 x 1024)
abt = Image.open('Tata Letak Editorial Tentang Model-1.png')

# Hero crop: Model lying with vintage telephone
hero_about = abt.crop((50, 180, 1370, 960))
hero_about.save('public/assets/about/model_telephone_hero.png')

# Filmstrip on right
filmstrip = abt.crop((810, 100, 990, 695)) # let's check exact x,y
# Eyes crop
eyes = abt.crop((435, 165, 675, 350))
eyes.save('public/assets/about/eyes_cutout.png')

# Torn paper collage (bottom left)
torn_paper = abt.crop((0, 590, 275, 820))
torn_paper.save('public/assets/about/torn_paper_portrait.png')

# 4. HOME CROPS (hOME.png: 1671 x 941)
hm = Image.open('hOME.png')

# Model sitting on denim beanbag
beanbag_model = hm.crop((0, 320, 520, 1000))
# Let's save clean crops
print("Assets extracted successfully!")
