#import pygame
from camera import Camera

def main():
  # Initialize the camera and record video frames for a few seconds
  # We select a random exposure for each frame to generate a wide range
  # of lighting samples for training
  camera = Camera(training_mode=True)
  run(camera)

#def record(camera, filename, seconds): 


  
if __name__ == '__main__':
    main()  