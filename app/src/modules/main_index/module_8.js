var e = l.uint8array ? "uint8array" : "array";
                      if (this.useUTF8()) this.fileNameStr = s.utf8decode(this.fileName), this.fileCommentStr = s.utf8decode(this.fileComment);
                      else {
                          var t = this.findExtraFieldUnicodePath();
                          if (null !== t) this.fileNameStr = t;
                          else {
                              var r = i.transformTo(e, this.fileName);
                              this.fileNameStr = this.loadOptions.decodeFileName(r)