(function($) {

var parser, serializer;

Mavo.Plugins.register("tinymce", {
	ready: $.include(self.tinymce, "https://cdn.tiny.cloud/1/gpvzoe74q3gz7516j8d5e5log6h0gv4ao5oeco8m34ywybnd/tinymce/5/tinymce.min.js").then(() => {
		parser = new tinymce.html.DomParser();
		serializer = new tinymce.html.Serializer();
	})
});

Mavo.Elements.register(".tinymce", {
	hasChildren: true,
	default: true,
	edit: function() {
		this.preEdit.then(evt => {
			if (this.tinymce) {
				// Previously edited, we already have an editor
				tinymce.EditorManager.execCommand("mceAddEditor", true, this.tinymce.id);
				return;
			}

			// Init for the first time
			tinymce.init({
				target: this.element,
				inline: true,
				menubar: false,
				toolbar: "styleselect | bold italic | image link | table | bullist numlist",
				plugins: "image code link table lists media tabfocus"
			}).then(editors => {
				this.tinymce = editors[0];

				this.tinymce.on("change", evt => {
					this.value = this.getValue();
				});
			});
		});
	},
	done: function() {
		if (this.tinymce) {
			tinymce.EditorManager.execCommand("mceRemoveEditor", true, this.tinymce.id);
		}
	},
	getValue: element => element.innerHTML,
	setValue: (element, value) => element.innerHTML = serializer.serialize(parser.parse(value))
});

})(Bliss);
