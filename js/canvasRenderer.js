/**
 * CanvasRenderer handles the Three.js scene, camera, and renderer.
 * It renders the current frame from ScrubEngine onto a full-screen plane.
 */
export default class CanvasRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new THREE.Scene();

        // Orthographic camera for 2D-like display
        this.camera = new THREE.OrthographicCamera(
            -this.width / 2, this.width / 2,
            this.height / 2, -this.height / 2,
            1, 1000
        );
        this.camera.position.z = 10;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: false,
            antialias: true
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Plane logic
        // We start with a generic geometry, but we will scale the mesh based on image aspect ratio
        const geometry = new THREE.PlaneGeometry(1, 1);

        // Basic material for high performance. 
        // Could use ShaderMaterial for "Vignette" as requested.
        this.material = new THREE.MeshBasicMaterial({
            map: null,
            transparent: false
        });

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(this.mesh);

        window.addEventListener('resize', this.onResize.bind(this));
    }

    setFrame(image) {
        if (!image) return;

        // Update texture
        if (!this.texture) {
            this.texture = new THREE.Texture(image);
            this.material.map = this.texture;
        } else {
            this.texture.image = image;
        }

        this.texture.needsUpdate = true;
        this.updateCoverFit(image.width, image.height);
        this.render();
    }

    updateCoverFit(imgWidth, imgHeight) {
        // Simulate "background-size: cover"
        const screenAspect = this.width / this.height;
        const imgAspect = imgWidth / imgHeight;

        let scaleX, scaleY;

        if (screenAspect > imgAspect) {
            // Screen is wider than image -> fit to width
            scaleX = this.width;
            scaleY = this.width / imgAspect;
        } else {
            // Screen is taller than image -> fit to height
            scaleY = this.height;
            scaleX = this.height * imgAspect;
        }

        this.mesh.scale.set(scaleX, scaleY, 1);
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.renderer.setSize(this.width, this.height);

        this.camera.left = -this.width / 2;
        this.camera.right = this.width / 2;
        this.camera.top = this.height / 2;
        this.camera.bottom = -this.height / 2;
        this.camera.updateProjectionMatrix();

        // Re-trigger fit if we have a texture
        if (this.texture && this.texture.image) {
            this.updateCoverFit(this.texture.image.width, this.texture.image.height);
        }

        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}
