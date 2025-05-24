from tkinter import*
from tkinter.messagebox import showinfo
from tkinter .filedialog import askopenfilename
import os

#basic tkinter setup
if __name__=='__main__' :
    root=Tk()
    root.title("notepad")
    #root.wm_iconbitmap("1.ico")
    root.geometry("644x788")

    #text
    text=Text(root, font="lucida 13")
    file = None
    text.pack(expand=True, fill=BOTH) #both ensures that when window is maximised, the text is maximised along it.



    #functions
    def newFile():
        global file
        root.title("notepad") #when existing file is deleted and new file is opened
        file=None #resetting
        text.delete(1.0, END) #to delete from line1 character0 till end
        
    def openFile():
        global file
        file= askopenfilename(defaultextension=".txt", filetypes=[("all files", "*.*"),("text documents","*.txt")])
        if file=="":  #to check if file is empty
    
            file=None
        else:
            root.title(os.path.basename(file)) #change name according to the file opened
            text.delete(1.0,END)
            f=open(file,"r") #input file name
            text.insert(1.0, f.read()) #read from file and display
            f.close()
            
    def saveFile():
        global file
        if file==None:
            file=asksaveasfilename(initialfile = "note.txt", defaultextension=".txt", filetypes=[("all files", "*.*"),("text documents","*.txt")])
            if file== "":
                file=None
            else:
                f=open(file, "w")
                f.write(text.get(1.0, END))
                f.close()
                root.title(os.path.basename(file))
        else:
            f=open(file, "w")
            f.write(text.get(1.0, END))
            f.close()
                        
                
                                   
            
    def exitFile():
        root.destroy()
    def cut():
        text.event_geenrate(("<<Cut>>"))
    def copy():
        text.event_geenrate(("<<Copy>>"))
    def paste():
        text.event_geenrate(("<<Paste>>"))
    def about():
        showinfo("notepad", "hello")

    #creating menu bar
    menuBar = Menu(root) #main menu
    
    fileMenu = Menu(menuBar, tearoff=0) #file submenu
    fileMenu.add_command(label="new", command=newFile) #open new file
    fileMenu.add_command(label="open", command=openFile) #open existing file
    fileMenu.add_command(label="save", command=saveFile) #save current file
    fileMenu.add_separator()
    fileMenu.add_command(label="exit", command=exitFile) #exit current file
    menuBar.add_cascade(label="file", menu=fileMenu)

    editMenu = Menu(menuBar, tearoff=0) #file submenu
    editMenu.add_command(label="cut", command=cut) #cut
    editMenu.add_command(label="copy", command=copy) #copy
    editMenu.add_command(label="paste", command=paste) #paste
    menuBar.add_cascade(label="edit", menu=editMenu)

    helpMenu = Menu(menuBar, tearoff=0) #file submenu
    helpMenu.add_command(label="About", command=about) #about notepad
    menuBar.add_cascade(label="help", menu=helpMenu)
    root.config(menu=menuBar)

    #adding scrollBar
    scroll=Scrollbar(text)
    scroll.pack(side=RIGHT, fill=Y)
    scroll.config(command=text.yview)
    text.config(yscrollcommand=scroll.set)
    
    


    root.mainloop()
 
