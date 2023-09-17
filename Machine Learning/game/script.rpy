# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define ch = Character("Chacha Chaudhary")


image picture_1=im.Scale('c2.jpeg',1920,1000)

# The game starts here.

label start:

    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg room.png" or "bg room.jpg") to the
    # images directory to show it.

    scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    show picture_1

    # These display lines of dialogue.

    ch "Hello , I'm Chacha Chaudhary "

    ch "I will be asisting you throughout your tour"

    # This ends the game.

    return
